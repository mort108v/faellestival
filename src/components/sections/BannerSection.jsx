import React from 'react';
import Banner from '../UI/Banner';

function BannerSection() {
    return (
        <section>
            <Banner content="7 Days" className="banner1"/>
            <Banner content="3 Stages" className="banner2"/>
            <Banner type="bandsQty" className="banner1"/>
            
            <Banner type="genre" className="banner2"/>
        </section>
    )
}

export default BannerSection
