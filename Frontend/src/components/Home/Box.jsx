export default function Box({ boxObj }) {
    const boxStyle = {
      backgroundColor: boxObj.bg_color
    };
  
    return (
      <div className={`${boxObj.class} bg-${boxObj.bg_color} rounded-2xl p-4 m-4 flex-col flex justify-center items-center gap-y-2`} style={boxStyle}>
        <h1>{boxObj.title}</h1>
        <img src={boxObj.image_path} alt={boxObj.title} />
      </div>
    );
  }