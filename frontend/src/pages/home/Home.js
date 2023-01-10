import "./home.scss";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-title">
                <span>IGE MOJI에 오신 걸 환영합니다.</span>
            </div>
            <div className="home-contents">
                자유롭게 이모지를 등록하고 사용해보세요~ <br />
                그리고 다양한 이모지를 사용해보세요!
            </div>
        </div>
    );
};

export default Home;