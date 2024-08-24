import React, { useState } from 'react';
import Hero from "./Hero"
import JSZip from 'jszip';
import axios from 'axios';

const titlePricing = ""
const textPricing = ""

const FormFileUploads: React.FC = () => {
    const [files, setFiles] = useState<FileList | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(event.target.files);
    };

    const handleUpload = async () => {
        if (!files) return;
    
        setUploading(true);
    
        const zip = new JSZip();
        Array.from(files).forEach((file, index) => {
            const uniqueFileName = `${index}-${file.name}`; // Añade un índice para que los nombres sean únicos
            zip.file(uniqueFileName, file);
        });
    
        try {
            const zippedContent = await zip.generateAsync({ type: 'blob' });
            const formData = new FormData();
            formData.append('file', zippedContent, 'files.zip');
    
            const response = await axios.post('http://142.44.160.168:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log('Response status:', response.status); // Depurar la respuesta
            console.log('Response data:', response.data); // Depurar la respuesta
    
            if (response.status === 200) {
                alert('Archivo(s) subido(s) exitosamente!');
            } else if (response.status === 403) {
                alert(response.data); // Muestra el mensaje que viene del servidor
            } else if (response.status === 413) {
                alert('El archivo es demasiado grande. El límite es de 500 KB.');
            } else {
                alert('Hubo un error al subir los archivos');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 403) {
                alert(error.response.data); // Muestra el mensaje del servidor en caso de error 403
            } else if (error.response.status === 413) {
                alert('El archivo es demasiado grande. El límite es de 500 KB.');
            } else {
                console.error('Error subiendo archivo:', error); // Depurar otros errores
                alert('Hubo un error al subir los archivos');
            }
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            <Hero title={titlePricing} text={textPricing} page='Subir' />
            <section id="file-upload" className="file-upload">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <span>Subir Archivos</span>
                        <h2>Subir Archivos</h2>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12">
                            <input type="file" multiple onChange={handleFileChange} />
                            <button onClick={handleUpload} disabled={uploading}>
                                {uploading ? 'Subiendo...' : 'Subir Archivos'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
};

export default FormFileUploads;
