import axios from 'axios';

const getDetail = () => {
  axios
    .get(
      'https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json'
    )
    .then(res => {
      const data = res.data.creditReportInfo;
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

export default getDetail;
