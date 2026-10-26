const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-left">
                <div>
                    <img src="/title.png" alt="MacBook Title" />
                </div>
                <p>Yazı</p>

                <div className="hero-buttons">
                    <button className="btn-courses">Eğitimleri İncele</button>
                    <button className="btn-outline btn-intro">Giriş Yap</button>
                </div>
                
            </div>

            <div className="hero-right">
                <img src="/macbook_seffaf_ekran.png" alt="MacBook Ekran" />
            </div>
        </section>
    )
}
export default Hero
