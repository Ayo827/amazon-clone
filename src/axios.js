import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-1e5df/us-central1/api" //API url(cloud function)
});

export default instance;




/*deploying
firebase init //from here you can get your functions file
npm run build
firebase deploy -- select the part you want to deploy

when running expreess backend.  just say firebase deploy --only functions(name of the backe end folder)


*/