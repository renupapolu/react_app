import { About_Img } from "../utils/constants";
const About=()=>{
  return(
    <div>
      <h2>Food delivery is basically the secret to happiness and success in life, and eating is one of the best parts of it. Even if you hate cooking, hate doing dishes, or don't have time, food delivery can save your life. You barely have to lift a finger, and if you're already at home? There's no way to beat it.</h2>
      <div>
        <img  className="About_img" src={About_Img}/>
      </div>
    </div>
  );
}
export default About;