import HttpService from "./htttp.service";

class GeneralService {
  getAllSlackMessages = async () => {
    const messages = 'slackMessages';
    return await HttpService.get(messages);
  }

  deleteSlackMessage = async (payload, id) => {
    const deleteMessage = `slackMessage/${id}`;
    return await HttpService.post(deleteMessage, payload);
  }

  getSlackMessage = async(id) => {
    const getMessage = `slackMessage/${id}`;
    return await HttpService.get(getMessage);
  }

  updateSlack = async (payload, id) => {
    const updateMessage = `slackMessage/${id}`;
    return await HttpService.patch(updateMessage, payload);
  }


  getAllJiraIssues = async () => {
    const messages = 'jiraIssues';
    return await HttpService.get(messages);
  }

  deleteJiraIssue = async (payload, id) => {
    const deleteMessage = `jiraIssue/${id}`;
    return await HttpService.post(deleteMessage, payload);
  }

  getJiraIssue = async(id) => {
    const getMessage = `jiraIssue/${id}`;
    return await HttpService.get(getMessage);
  }

  updateJiraIssue = async (payload, id) => {
    const updateMessage = `jiraIssue/${id}`;
    return await HttpService.patch(updateMessage, payload);
  }


  getAllNotions = async () => {
    const messages = 'notions';
    return await HttpService.get(messages);
  }

  deleteNotion = async (payload, id) => {
    const deleteMessage = `notion/${id}`;
    return await HttpService.post(deleteMessage, payload);
  }

  getNotion = async(id) => {
    const getMessage = `notion/${id}`;
    return await HttpService.get(getMessage);
  }

  updateNotion = async (payload, id) => {
    const updateMessage = `notion/${id}`;
    return await HttpService.patch(updateMessage, payload);
  }
}

export default new GeneralService();
