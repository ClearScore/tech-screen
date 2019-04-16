import config from '../../config/environment';

const CreditService = {
  get: () => fetch(`${config.api.host}/creditReportInfo.json`).then(res => res.json()).then(json => json.creditReportInfo)
}

export default CreditService;