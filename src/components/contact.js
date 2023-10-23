import { Contact_Img } from "../utils/constants";
const Contact=()=>{
  return(
    <div>
      <h2>A Contact Us page isn’t just another page on your website. In fact, it is one of your most valuable pages—and you should treat it as such. A Contact Us page provides guidance for existing customers and offers an overview of your brand for new visitors.</h2>
      <div>
        <img  className="conatct_img" src={Contact_Img}/>
      </div>
    </div>
  );
}
export default Contact;