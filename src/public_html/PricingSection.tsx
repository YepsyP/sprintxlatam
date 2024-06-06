interface PricingProps {
    title: string;
    price: number;
    description: string;
    delay: number;
}

const PricingSection: React.FC<PricingProps> = ({ title, price, description, delay }) => {
    return (
        <div className="col-xl-3" data-aos="fade-up" data-aos-delay={delay}>
            <div className="pricing-item cards-pricing">
                <h3>{title}</h3>
                <h4><span>Desde </span><sup>$</sup>{price}</h4>
                <p>
                    {description}
                </p>
                <a href="#" className="buy-btn">Comprar ahora</a>
            </div>
        </div>
    );
};

export default PricingSection;