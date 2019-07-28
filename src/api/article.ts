import axios from 'axios';

class Article {
  static draft(params) {
    return axios.post('/api/article/draft', params);
  }

  static get_draft(query) {
    return axios.get(`/api/article/draft?id=${query.id}`);
  }
  
  static update_draft(params) {
    return axios.put('/api/article/draft', params);
  }

  static delete_draft(query) {
    return axios.delete(`/api/article/draft?id=${query.id}`);
  }

  static get_draft_thums(params) {
    return axios.get('/api/article/draft_thums', params);
  }
  
  static article(params) {
    return axios.post('/api/article', params);
  }

  static update_article(params) {
    return axios.put('/api/article', params);
  }

  static delete_article(query) {
    return axios.delete(`/api/article?id=${query.id}`);
  }

  static get_article(query) {
    return axios.get(`/api/article?id=${query.id}`);
  }

  static get_article_thums(params) {
    return axios.get('/api/article_thums', params);
  }
}

export default Article;