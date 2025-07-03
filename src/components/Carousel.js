const cdn = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

const Carousel = (props) => {
    const {resCor} = props;

    return(
        <div>
            <img src={cdn+resCor.imageId}/>
        </div>
    )
}

export default Carousel;
