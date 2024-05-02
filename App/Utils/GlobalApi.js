import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clusfga9e0me307wevslds90h/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getProjectList = async () => {
  const query = gql`
    query getProjectList {
      projectsLists {
        id
        name
        phoneNumber
        contactPerson
        category {
          name
        }
        image {
          url
        }
        adress
        about
        progress
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getProjectListByCategory = async (category) => {
  const query =
    gql`
    query getProjectList {
      projectsLists(where: { category: { name: "` +
    category +
    `" } }) {
        id
        name
        phoneNumber
        contactPerson
        category {
          name
        }
        image {
          url
        }
        adress
        about
        progress
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSlider,
  getCategories,
  getProjectList,
  getProjectListByCategory,
};
