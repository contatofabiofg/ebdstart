<template>
    <div class="chatbox">
        <div class="headerarea d-flex flex-row justify-content-center align-items-center" @click="minimizar">
            <img class="fulllogo" src="../../public/full.jpg" alt="full">
            <div class="titulosarea">
                <div class="titulo1">Atendimento Fullscreen</div>
                <div class="d-flex flex-row align-items-center">
                    <div class="status"></div>
                    <div class="titulo2">Disponível</div>
                </div>

            </div>
            <div class="minimize" ></div>
        </div>

        <div class="chatarea" id="chatarea" :class="{ 'campominimizado': minimize }">
            <div class="fulltext">FullScreen, bom dia, como podemos te ajudar?</div>
            <div class="fulltext fullbutton" @click="wait('atendente')">Falar com Atendente</div>
            <div class="fulltext fullbutton" @click="wait('rejeição')">Estou recebendo uma rejeição</div>
            <!-- <div class="usertext">falar com atendente</div>-->
        </div>

        <div class="inputarea" :class="{ 'campominimizado': minimize, 'inputdesabilitado': enviodesabilitado }">
            <input type="text" placeholder="Escreva aqui" v-model="input" :disabled="enviodesabilitado" @keyup.enter="printusertext()" />
            <img class="send" :class="{ 'desabilitado': enviodesabilitado }" @click="printusertext()"
                src="../../public/send.png" alt="enviar">
        </div>
    </div>

</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatboxC',
    data() {
        return {
            enviodesabilitado: true,
            minimize: false,
            input: "",
            menu: "",
            loading: true,
            interval: 0
        }
    },
    computed: {

    },
    emits: ["modelo"],
    components: {

    },
    methods: {
        minimizar() {
            this.minimize = !this.minimize;
        },
        rolarchat() {
            let chatarea = document.querySelector(".chatarea");
            let tamanho = document.querySelector(".chatarea")?.scrollHeight;
            if (tamanho !== undefined) {
                chatarea?.scrollTo(0, tamanho)
            }
        },
        wait(opcao: string) {
            // Gerar elemento "digitando"
            let chatarea = document.querySelector(".chatarea");
            const digit = document.createElement("img");
            digit.setAttribute("src", "https://user-images.githubusercontent.com/3059371/49334754-3c9dfe00-f5ab-11e8-8885-0192552d12a1.gif")
            digit.setAttribute("style", "width: 100px; height: auto; background-position: center; background-size: cover; display: block");
            digit.setAttribute("id", "digitando");
            chatarea?.appendChild(digit);
            this.rolarchat();
            // Apagar elemento "digitando" após um segundo e chamar resposta
            this.interval = setInterval(() => {
                let filho = document.getElementById("digitando");
                let pai = document.getElementById("chatarea");
                if (filho !== null) {
                    pai?.removeChild(filho);
                    this.loading = false
                    if (opcao == "atendente" || opcao == "rejeição") {
                        this.atendimentoinicial(opcao)
                    } else if (opcao == "enviar") {
                        this.avaliarresposta()
                    }
                }

            }, 1000)
        },
        atendimentoinicial(texto: string) {
            if (texto == "atendente") {
                //criando elemento "clique abaixo" e definindo o menu
                clearInterval(this.interval);
                this.menu = "atendente";
                const insert = document.createElement("div");
                insert.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 0px 5px 10px;; padding: 10px; background-color: rgb(224, 224, 224); border-radius: 5px 5px 5px 0px; position: relative; word-wrap: break-word; display: block");
                const info = document.createTextNode("Clique abaixo e você será redirecionado à um dos nossos atendentes. Tenha um excelente dia!");
                insert.appendChild(info);
                document.querySelector(".chatarea")?.appendChild(insert);

                //criando o elemento "iniciar atendimento"
                const insert2 = document.createElement("a");
                insert2.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 0px 5px 10px;; padding: 10px; background-color: rgb(167, 253, 181); border-radius: 10px 10px 10px 10px; position: relative; word-wrap: break-word; display: block; cursor: pointer; text-decoration: none; color: black");
                insert2.setAttribute("href", "https://fullscreen.movidesk.com/Account/Login?ReturnUrl=%2f");
                insert2.setAttribute("target", "_blank");
                const insert3 = document.createElement("div");
                const info2 = document.createTextNode("Iniciar atendimento");
                insert3.appendChild(info2);
                insert2.appendChild(insert3);
                document.querySelector(".chatarea")?.appendChild(insert2);
                //chamando nova solicitação
                this.novasolicitacao()


            } else if (texto == "rejeição") {
                //criando elemento "Digite abaixo o número" e definindo o menu "rejeição"
                clearInterval(this.interval);
                this.menu = "rejeição"
                this.enviodesabilitado = false;
                let insert = document.createElement("div");
                insert.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 0px 5px 10px;; padding: 10px; background-color: rgb(224, 224, 224); border-radius: 5px 5px 5px 0px; position: relative; word-wrap: break-word; display: block");
                insert.innerHTML = "Digite abaixo o número do erro que você está recebendo";
                document.querySelector(".chatarea")?.appendChild(insert);
            }
            this.rolarchat();
        },
        printusertext() {
            //imprimindo o texto digitado pelo usuário e chamando a resposta
            let texto = this.input;
            const insert2 = document.createElement("div");
            insert2.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 10px 5px 0px;; padding: 10px; background: linear-gradient(54deg, rgba(56,135,87,1) 0%, rgba(49,145,136,1) 100%); color: white; border-radius: 5px 5px 0px 5px; position: relative; word-wrap: break-word; display: block   ");
            const info2 = document.createTextNode(`${texto}`);
            insert2.appendChild(info2);
            const container = document.createElement("div");
            container.setAttribute("style", "direction: rtl");
            container.appendChild(insert2);
            document.querySelector(".chatarea")?.appendChild(container);
            this.enviodesabilitado = true;
            this.wait("enviar")

        },
        novasolicitacao() {
            //criando elemento "posso ajudar"
            let insert = document.createElement("div");
            insert.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 0px 5px 10px;; padding: 10px; background-color: rgb(224, 224, 224); border-radius: 5px 5px 5px 0px; position: relative; word-wrap: break-word; display: block");
            insert.innerHTML = "Podemos ajudar em algo mais?";
            document.querySelector(".chatarea")?.appendChild(insert);
            
            //criando elemento "falar com atendente"
            let insert2 = document.createElement("div");
            insert2.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 0px 5px 10px;; padding: 10px; background-color: rgb(199, 199, 199); cursor: pointer; border-radius: 5px 5px 5px 0px; position: relative; word-wrap: break-word; display: block");
            insert2.setAttribute("onMouseOver", "this.style.backgroundColor='rgb(148, 204, 181)'");
            insert2.setAttribute("onMouseOut", "this.style.backgroundColor='rgb(164, 226, 200)'");
            insert2.innerHTML = "Falar com atendente";
            document.querySelector(".chatarea")?.appendChild(insert2);
            insert2.onclick = () => { this.wait("atendente") };

            //criando elemento "número de rejeição"
            let insert3 = document.createElement("div");
            insert3.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 0px 5px 10px;; padding: 10px; background-color: rgb(199, 199, 199); cursor: pointer; border-radius: 5px 5px 5px 0px; position: relative; word-wrap: break-word; display: block");
            insert3.setAttribute("onMouseOver", "this.style.backgroundColor='rgb(148, 204, 181)'");
            insert3.setAttribute("onMouseOut", "this.style.backgroundColor='rgb(164, 226, 200)'");
            insert3.innerHTML = "Número de Rejeição";
            document.querySelector(".chatarea")?.appendChild(insert3);
            insert3.onclick = () => { this.wait("rejeição") };
        },

        avaliarresposta() {
            //pegando a resposta e limpando o nput
            clearInterval(this.interval);
            let resposta = this.input;
            this.input = "";
            
            //criando div para a resposta, mas sem escrever nada nela
            const insert = document.createElement("div");
            insert.setAttribute("style", "width: fit-content; max-width: 200px; margin: 5px 0px 5px 10px; padding: 10px; background-color: rgb(224, 224, 224); border-radius: 5px 5px 5px 0px; position: relative; word-wrap: break-word;");
            var info;

            //caso o meu seja "rejeição", essas serão as respostas pro que for digitado
            if (this.menu == "rejeição") {
                switch (resposta) {
                    case "204":
                        info = document.createTextNode("Causa: Quando for emitida uma NF-e (modelo 55) ou NFC-e (modelo 65), com a mesma Chave de Acesso de uma NF-e já autorizada pela Sefaz, será retornado a rejeição '204 - Duplicidade de NF-e'. Solução: Deve-se alterar o número da NF-e, de forma que o escolhido ainda não tenha sido utilizado e realizar o reenvio do documento fiscal.");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;
                    case "206":
                        info = document.createTextNode("Causa: Quando for emitida uma NF-e (modelo 55) ou NFC-e (modelo 65), com a mesma Chave de Acesso de uma NF-e já autorizada pela Sefaz, será retornado a rejeição '204 - Duplicidade de NF-e'. Solução: Deve-se alterar o número da NF-e, de forma que o escolhido ainda não tenha sido utilizado e realizar o reenvio do documento fiscal.");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;
                    case "208":
                        info = document.createTextNode("Causa: Quando for emitida uma NF-e (modelo 55) ou NFC-e (modelo 65), com a mesma Chave de Acesso de uma NF-e já autorizada pela Sefaz, será retornado a rejeição '204 - Duplicidade de NF-e'. Solução: Deve-se alterar o número da NF-e, de forma que o escolhido ainda não tenha sido utilizado e realizar o reenvio do documento fiscal.");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;
                    case "210":
                        info = document.createTextNode("resolução do problema 210");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;
                    case "211":
                        info = document.createTextNode("resolução do problema 211");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;
                    case "212":
                        info = document.createTextNode("resolução do problema 212");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;
                    case "213":
                        info = document.createTextNode("resolução do problema 213");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;

                    default:
                        info = document.createTextNode("Não identificamos esse número em nossa base de dados");
                        insert.appendChild(info);
                        document.querySelector(".chatarea")?.appendChild(insert);
                        break;
                }
            }
            
            //chamando nova solicitação
            this.novasolicitacao()
            this.rolarchat()
        }
    }
}
);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.chatbox {
    position: fixed;
    right: 30px;
    bottom: 0px;
    width: 300px;
    height: auto;
    border-radius: 10px 10px 0px 0px;
    box-shadow: -5px 5px 25px rgb(196, 196, 196);
    background-color: white;

}

.headerarea {
    height: 60px;
    background-color: rgb(3, 129, 98);
    border-radius: 10px 10px 0px 0px;
    cursor: pointer
}

.chatarea {
    min-height: 300px;
    max-height: 400px;
    overflow-y: scroll;
    font-size: 12px;
    scroll-behavior: smooth;
}

.fulllogo {
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background-position: center;
    
}

.titulosarea {
    margin-left: 15px;
    font-family: "Montserrat";
}

.titulo1 {
    color: white;

    font-size: 13px;
}

.titulo2 {
    color: white;
    font-size: 10px;
}

.minimize {
    width: 15px;
    height: 15px;
    border-bottom: 3px solid white;
    cursor: pointer;
    margin-left: 30px;
}

.fulltext {
    width: fit-content;
    max-width: 200px;
    margin: 5px 0px 5px 10px;
    padding: 10px;
    background-color: rgb(224, 224, 224);
    border-radius: 5px 5px 5px 0px;
    position: relative;
    word-wrap: break-word;
}

.fullbutton {
    cursor: pointer;
    background-color: rgb(164, 226, 200);
}

.fullbutton:hover {
    background-color: rgb(148, 204, 181);
}

.usertext {
    width: fit-content;
    max-width: 200px;
    margin: 5px;
    border-radius: 5px 5px 0px 5px;
    background: linear-gradient(54deg, rgba(56, 135, 87, 1) 0%, rgba(49, 145, 136, 1) 100%);
    color: white;
    position: relative;
    float: right;
    right: 5px;
    word-wrap: break-word;
}

.inputarea {
    border-top: 1px solid rgba(56, 135, 87, 1);

}

input {
    width: 250px;
    height: 50px;
    border: none;
    outline: none;

}

.send {
    width: 20px;
    height: auto;
    margin-left: 15px;
    background-position: center;
    background-size: cover;
    cursor: pointer;
}

.desabilitado {
    cursor: not-allowed;
    filter: opacity(30%);
    pointer-events: none;
}

.inputdesabilitado {
    cursor: not-allowed;
    background-color: rgb(187, 187, 187);

}

.campominimizado {
    max-height: 0px;
    min-height: 0px;
    overflow: hidden;
}

.status {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: rgb(52, 238, 52);
    margin-right: 5px;
}
</style>
