import React from 'react';
import './PageTitle.css'



function PageTitle(props) {

    const { title } = props;

    return (
        <div className='title'>
            <div className='title__list_leagues'>
                <p>СПИСОК ЛИГ</p>
                <img src="https://images11.cosmopolitan.ru/upload/img_cache/5f2/5f2ca66491705731a7dc9ee415607442_cropped_1210x776.webp" alt="" />
                <img src="https://avatars.mds.yandex.net/get-zen_doc/236854/pub_59860fb34ffd13791458011e_598610cbe86a9ee28562f34e/scale_1200" alt="" />
                <img src="https://wl-adme.cf.tsp.li/resize/728x/jpg/042/8f6/9d601955b2bd8ae3ebd621c57d.jpg" alt="" />

            </div>
        </div>
    );
}


export default PageTitle;

