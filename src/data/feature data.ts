
const featuredata=[
    {
        id:1,
        title:"Quick to setup",
        header:"A dedicated landing page",
        buttonText:"Try it for free",
        paragraph:"Create a dedicated landing page for your business. Share the page link easily via email, social media, or even SMS. Setup can be done in two minutes.",
        image:"https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Flanding-page.png?alt=media&token=269a1a1c-4539-4d94-aa9e-ed0425eb1fce"
    },
    {
        id:1,
        title:"Easy to manage",
        header:"A dashboard to manage all testimonials",
        buttonText:"Try it for free",
        image:"https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2FEasy%20to%20manage%20(1).png?alt=media&token=5d3ae5f2-e35b-4e35-8070-acde541c18ec",
        paragraph:"You will have a simple & clean dashboard to manage all testimonials in one place. It's like your email inbox, but it's designed for your social proof!",
    },
    {
        id:1,
        title:"Track the metrics",
        header:"Understand how video testimonials are performing",
        buttonText:"",
        image:"https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmetrics.png?alt=media&token=c5aa1272-4d36-4f9f-8ee6-df660985e7e1",
        paragraph:"Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels."
    },
    {
        id:1,
        title:"More social proof",
        header:"Not only text and video testimonials",
        paragraph:"If you have testimonials on social media (e.g. Twitter, LinkedIn, TikTok etc), video hosting platforms (e.g. YouTube, Vimeo), and other review sites (e.g. G2, Google, Capterra, Yelp etc), bring them all to your account. Testimonial helps you manage all your social proof in a single place!",
        image:"https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fmore-social-proof.png?alt=media&token=83a1a3e9-449d-457d-80fb-0cfa55484700"
    },
    {
        id:1,
        title:"Embed the Wall of Love",
        header:"The best testimonials all in one place",
        buttonText:"",
        image:"https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/assets%2Ffeatures%2Fwall-of-love.png?alt=media&token=74e955e5-a21b-4cc6-ab05-d497b7fb313a",
        paragraph:"Treat the Wall of Love as the place to showcase all your favorite testimonials. You can embed it to your website in under a minute. No coding knowledge required!"
    }
]
export default featuredata


type Feature = {
    id: number;
    title: string;
    description: string;
    icon?: string; // Optional icon
    isLocked: boolean;
  };
  
 export const nextfeatureData: Feature[] = [
    {
      id: 1,
      title: "Dedicated page",
      description:
        "For each of your businesses, it will have a dedicated space page with a unique link. Your customers can directly go there to submit a text or a video testimonial.",
      isLocked: false,
    },
    {
      id: 2,
      title: "Embeddable Wall of Love",
      description:
        "It's a page to show all your selected testimonials. You can even add the whole wall to your own site with an iframe embed code.",
      isLocked: false,
    },
    {
      id: 3,
      title: "Dashboard page",
      description:
        "You will have a dashboard page to manage all your spaces. You can add/update/remove the space as you want.",
      isLocked: false,
    },
    {
      id: 4,
      title: "Video download",
      description:
        "You will have the access to download the video in the MP4 format with its original resolution.",
      isLocked: false,
    },
    {
      id: 5,
      title: "Video embed",
      description:
        "One-line embed code is available for each video. You can paste it in any no-code platform. We take care of all hosting and streaming.",
      isLocked: false,
    },
    {
      id: 6,
      title: "Your video message",
      description:
        "You can add your own video in the space page. It’s more personal and may help encourage customers send you their best shoutouts.",
      isLocked: true,
    },
    {
      id: 7,
      title: "Custom domain",
      description:
        "You can add the custom domain for each space. The link can be testimonial.your-product.com, or whatever you like.",
      isLocked: true,
    },
    {
      id: 8,
      title: "Custom color",
      description:
        "You can add a custom color for buttons to make it more fit into your own brand.",
      isLocked: true,
    },
    {
      id: 9,
      title: "Dark or light theme",
      description:
        "You can choose dark or light theme for the product page to better fit your website style.",
      isLocked: false,
    },
  ];





