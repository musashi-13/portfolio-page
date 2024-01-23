function Loader() {
    return(
        <div className="loading-screen">
            <div className="spinner" style={{position: "absolute", top: "45%", left: "48%", transform: "translate(-50%, -50%)"}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader