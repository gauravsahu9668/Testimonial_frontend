// import nodemailer from "nodemailer"
// export const mailSender=async(custName:string,custEmail:string,thankyouTitle:string,thankMessage:string,senderMessage:string,reviewurl:string)=>{
//     const  MAIL_HOST="smtp.gmail.com"
//     const MAIL_USER="gs162592@gmail.com"
//     const MAIL_PASS="glavvlvlfytnjiwd"
//    try{
//       const transporter=nodemailer.createTransport({
//         host:MAIL_HOST,
//         auth:{
//             user:MAIL_USER,
//             pass:MAIL_PASS
//         }
//       })
//       const info=transporter.sendMail({
//          from:"- Gaurav sahu from Testimonial",
//          to:`${custEmail}`,
//          subject:"Testimonial created successfully",
//          html:`body`
//       })
//       console.log(info)
//       return info
//    }catch(e){
//     console.log(e);
//    } 
// }