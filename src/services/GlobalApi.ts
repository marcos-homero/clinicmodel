import { request, gql } from "graphql-request";

const normalizeText = (text: string) => {
  return text
    .normalize("NFD") // Normaliza o texto decompondo caracteres acentuados
    .replace(/[\u0300-\u036f]/g, ""); // Remove os diacríticos (acentos)
};

interface ExamesProps {
  examesConnection: {
    edges: [
      {
        node: {
          content: [
            {
              id: string;
              tipo: string;
              valor: string;
              descricao: string;
              preparo: string;
            }
          ];
        };
      }
    ];
  };
}

interface ConsultasProps {
  consultasConnection: {
    edges: [
      {
        node: {
          content: [
            {
              id: string;
              tipo: string;
              valor: string;
              descricao: string;
              medico: string;
            }
          ];
        };
      }
    ];
  };
}

const GetExames = async (
  indexOfFirst: number,
  indexOfLast: number,
  input: string
) => {
  const query = gql`
    query MyQuery {
      examesConnection {
        edges {
          node {
            content
          }
        }
      }
    }
  `;

  const result: ExamesProps = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm1l1dv4300ga07vzxihuoj8p/master",
    query
  );

  const posts = result.examesConnection.edges;

  const nodes = posts.map((item) => item.node);
  const exames = nodes.map((item) => item.content);

  const inputData = exames[0].filter((item) => {
    const normalizedTipo = normalizeText(item.tipo.toLowerCase());
    const normalizedInput = normalizeText(input.toLowerCase());
    return normalizedTipo.includes(normalizedInput);
  });

  const currentItems = inputData.slice(indexOfFirst, indexOfLast);

  return [currentItems, exames[0]];
};

const GetExameId = async (id: string) => {
  const query = gql`
    query MyQuery {
      examesConnection {
        edges {
          node {
            content
          }
        }
      }
    }
  `;

  const result: ExamesProps = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm1l1dv4300ga07vzxihuoj8p/master",
    query
  );

  const posts = result.examesConnection.edges;

  const nodes = posts.map((item) => item.node);
  const exames = nodes.map((item) => item.content);

  const itemFind = exames[0].find((item) => item.id === id);

  return itemFind;
};

const GetConsultas = async (
  indexOfFirst: number,
  indexOfLast: number,
  input: string
) => {
  const query = gql`
    query MyQuery {
      consultasConnection {
        edges {
          node {
            content
          }
        }
      }
    }
  `;

  const result: ConsultasProps = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm1l1dv4300ga07vzxihuoj8p/master",
    query
  );

  const posts = result.consultasConnection.edges;

  const nodes = posts.map((item) => item.node);
  const consultas = nodes.map((item) => item.content);

  const inputData = consultas[0].filter((item) => {
    const normalizedTipo = normalizeText(item.tipo.toLowerCase());
    const normalizedInput = normalizeText(input.toLowerCase());
    return normalizedTipo.includes(normalizedInput);
  });

  const currentItems = inputData.slice(indexOfFirst, indexOfLast);

  return [currentItems, consultas[0]];
};

const GetConsultaId = async (id: string) => {
  const query = gql`
    query MyQuery {
      consultasConnection {
        edges {
          node {
            content
          }
        }
      }
    }
  `;

  const result: ConsultasProps = await request(
    "https://us-west-2.cdn.hygraph.com/content/cm1l1dv4300ga07vzxihuoj8p/master",
    query
  );

  const posts = result.consultasConnection.edges;

  const nodes = posts.map((item) => item.node);
  const consultas = nodes.map((item) => item.content);

  const itemFind = consultas[0].find((item) => item.id === id);

  return itemFind;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  GetExames,
  GetExameId,
  GetConsultas,
  GetConsultaId,
};
