import React, { Component } from "react";

import Post from "./Post";

import avatar1 from "../assets/julio_alcantara.png";
import avatar2 from "../assets/diego_fernandes.png";
import avatar3 from "../assets/gabriel_lisboa.png";
import avatar4 from "../assets/clara_lisboa.png";
import avatar5 from "../assets/cezar_toledo.png";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Júlio Alcantara",
          avatar: avatar1
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: avatar2
            },
            date: "04 Jun 2019",
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: avatar3
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: avatar4
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: avatar5
            },
            date: "04 Jun 2019",
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Gabriel Lisboa",
          avatar: avatar3
        },
        date: "04 Jun 2019",
        content:
          "Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: avatar4
            },
            date: "04 Jun 2019",
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: avatar5
            },
            date: "04 Jun 2019",
            content:
              "Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
