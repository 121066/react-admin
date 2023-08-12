import Chart from './Chart';
import HeaderTop from './HeaderTop';
import './index.scss';
function Home() {
    return (
        <>
            <div className="home">
                <div className="home_top">
                    <HeaderTop></HeaderTop>
                    <HeaderTop></HeaderTop>
                </div>
                <Chart className="home_bot"></Chart>
            </div>
        </>
    );
}
export default Home;
