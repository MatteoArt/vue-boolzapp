

Vue.createApp({
    data() {
        return {
            //array di oggetti contenente tutti i contatti
            contacts: [
                {
                    name: "Michele",
                    avatar: "img1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        }
                    ]
                },
                {
                    name: "Fabio",
                    avatar: "img2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                        }
                    ]
                },
                {
                    name: "Samuele",
                    avatar: "img3",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        }
                    ]
                },
                {
                    name: "Alessandro B.",
                    avatar: "img4",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        }
                    ]
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img5',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Claudia',
                    avatar: 'img6',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Federico',
                    avatar: 'img7',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ]
                },
                {
                    name: 'Davide',
                    avatar: 'img8',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ]
                }
            ], //fine array contatti di oggetti
            imgRound: 'img-rounded',
            user: {
                userName: 'Sofia',
                image: 'avatar_io.jpg',
            },
            currentChat: null,
            messageClass: 'message',
            newMessage: {
                date: '',
                message: "",
                status: ''
            },
            searchUser: '',
            dropShow: false,
            cpuReplies: ["ciao", "va bene", "come stai?", "ok, a dopo allora",
                "bel tempo oggi", "oggi è nuvoloso, peccato volevo uscire",
                "tutto bene, tu?", "tiro avanti", "ok", "sono occupato stasera", "non posso, lavoro",
                "stacco da lavoro alle 18", "tutto fatto", "mi spiace, non posso esserci",
                "va bene, allora ci sarò!", "alla grande!", "stasera vuoi andare al cinema?",
                "stasera non posso, devo andare in palestra", "come te la passi?", "hai visto che bel tempo oggi?",
                "fa molto caldo", "piove a dirotto, spero non si allaghi il quartiere!", "devo andare a ritirare la macchina alle 17",
                "ascoltavo musica", "che fai?", "vedevo un film thriller", "vado a farmi una doccia", "ascoltavo un pò di rock",
                "domani che fai?", "ci vediamo domani sera?", "ciao, alla prossima", "stammi bene",
                "volevo formattare il pc", "te ne intendi di programmazione in Php?"],
            imgAddedCounter: 0,
        }
    },
    methods: {
        addClassFlexCenter(messageUser) {
            if (messageUser === "") {
                return "flex-center";
            } else {
                return "";
            }
        },
        //funzione che prende in input l'oggetto cliccato e lo
        //salva nella proprietà currentChat
        onChatClick(chatItem) {

            this.currentChat = chatItem;

            //recupero il contenitore di destra
            let containerRight = this.$refs.contenutoChat;
        
            if (matchMedia("(max-width: 576px)").matches) {
                //se l'elemento non contiene la classe
                if (!containerRight.classList.contains("show-chat")) {
                    containerRight.classList.add("show-chat");
                } else if (containerRight.classList.contains("show-chat")) {
                    containerRight.classList.remove("show-chat");
                }

                
            }
        },
        backChat() {
            let containerRight = this.$refs.contenutoChat;

            if (containerRight.classList.contains("show-chat")) {
                containerRight.classList.remove("show-chat");
            }
        },
        ctrlMessage(state) {
            if (state === 'sent') {
                return 'message-sent';
            } else if (state === 'received') {
                return 'message-received';
            }
        },
        validateMessage(mess) {
            if (mess.trim() === "") {
                return false;
            } else {
                return true;
            }
        },
        //funzione che estrae una parola random dall'array delle risposte del pc
        randomWord(listaFrasi) {
            let i = Math.floor(Math.random() * listaFrasi.length);
            return listaFrasi[i];
        },
        addMessage(curChat) {
            if (curChat.name === "") {
                alert("Non puoi scrivere perchè non ci sono più contatti presenti.\nRicarica l'applicazione per ripristinare i contatti o aggiungi dei nuovi contatti per poter scrivere.");
                return;
            }

            //aggiorno proprietà stato contatto
            curChat.statoContatto = "sta scrivendo...";

            //controllo se il messaggio è vuoto, se vuoto fermo subito la funzione
            if (!this.validateMessage(this.newMessage.message)) {
                return;
            }
            this.newMessage.message = this.newMessage.message.trim();
            //clono l'oggetto per eliminare la reattività
            const newMessageClone = { ...this.newMessage };
            newMessageClone.status = 'sent';
            newMessageClone.date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();

            curChat.messages.push(newMessageClone);

            //inviato il messaggio svuoto la casella di input
            this.newMessage.message = "";

            setTimeout(() => {
                this.$refs.scrollContainer.scrollTop = this.$refs.scrollContainer.scrollHeight;
            }, 0);

            //intervallo che ogni 1 sec stampa il messaggio del computer
            setTimeout(() => {
                const cpuMessage = { ...this.newMessage };
                cpuMessage.message = this.randomWord(this.cpuReplies);
                cpuMessage.status = 'received';
                cpuMessage.date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
                curChat.messages.push(cpuMessage);
            }, 1000);

            setTimeout(() => {
                this.$refs.scrollContainer.scrollTop = this.$refs.scrollContainer.scrollHeight;
            }, 1000);

            setTimeout(() => {
                curChat.statoContatto = "online";
            }, 1001);

            setTimeout(() => {
                let ultimoAccesso = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
                let lastAccess = this.formatDateHour(ultimoAccesso);
                curChat.statoContatto = `Ultimo accesso oggi alle ${lastAccess}`;
            }, 4000);

        },
        toggle(mesObj) {
            mesObj.show = !mesObj.show;
        },
        dropToggle() {
            this.dropShow = !this.dropShow;
        },
        deleteMessage(messageObj, chatObj) { //recupero il messaggio cliccato per poi eliminarlo
            chatObj.messages;
            const index = chatObj.messages.indexOf(messageObj);
            chatObj.messages.splice(index, 1);
        },
        //metodo che cancella tutti i messaggi di una chat
        deleteAllMessage(arrMess) {
            //impostando a zero la lunghezza dell'array vengono eliminati tutti i suoi elementi
            arrMess.length = 0;
        },
        //metodo che cancella tutti i dati di una chat
        deleteChat(chatUser) {
            if (chatUser.name === "") {
                alert("Nessuna chat presente");
                return;
            }

            this.deleteAllMessage(this.currentChat.messages);
            //resetta la chat corrente
            this.currentChat = {};

            //indice della chat da eliminare
            const index = this.contacts.indexOf(chatUser);

            if (index !== -1) {
                this.deleteAllMessage(this.contacts[index].messages);

                this.contacts.splice(index, 1);
            }

            if (index === this.contacts.length && this.contacts.length > 0) {
                this.currentChat = this.contacts[index - 1];
            } else if (index === 0 && this.contacts.length === 0) { //l'array delle chat è stato svuotato e quindi current chat non punta più a nulla
                this.currentChat = {
                    name: "",
                    avatar: "avatar-default",
                    messages: []
                };
                return;
            }
            else {
                this.currentChat = this.contacts[index];
            }
        },
        addChatContact() {
            const nameChat = prompt("Inserisci il nome del nuovo contatto che vuoi aggiungere:");
            const urlImg = prompt("Inserisci il link all'immagine che vuoi usare come icona del contatto: ( usare il link: https://picsum.photos/80 )");


            if ((nameChat === null || nameChat === "") || (urlImg === null || urlImg === "")) {
                alert("Non puoi lasciare i campi vuoti");
                return;
            } else if (!urlImg.startsWith("http")) {
                alert("Inserisci un url valido, che inizi con http:// o https://");
                return;
            } else {
                ++this.imgAddedCounter;
                
                let rand = `?random=${this.imgAddedCounter}`;

                //creo l'oggetto che verrà poi pushato dentro l'array dei contatti
                let newChat = {
                    name: nameChat,
                    avatar: urlImg + rand,
                    messages: []
                };

                this.contacts.push(newChat);
                console.log(this.contacts);
            }

        },
        //formatta una data e ritorna l'ora in ore e minuti
        formatDateHour(date) {
            let dateArr = date.split(" ");

            let hourArr = dateArr[1].split(":");

            return hourArr[0] + ':' + hourArr[1];
        },
        lastMessage(arr) {
            if (arr.length === 0) {
                return "";
            }

            const last = arr[arr.length - 1];

            if (last.message.length > 25) {
                return `${last.message.substring(0, 25)}...`;
            } else {
                return last.message;
            }

        },
        lastHour(arrMessages) {
            if (arrMessages.length === 0) {
                return "";
            }
            const last = arrMessages[arrMessages.length - 1];

            return this.formatDateHour(last.date);

        }
    },
    computed: {
        contactsList() {


            if (this.searchUser.trim().length > 0) {
                return this.contacts.filter((userObj) => {
                    return userObj.name.toLowerCase().includes(this.searchUser.trim().toLowerCase());
                });
            } else {
                return this.contacts;
            }
        }
    },
    beforeMount() {
        //prima che viene caricato il dom dell'applicazione vado ad
        //inizializzare l'utente da mostrare con il primo oggetto della lista
        //contatti per evitare errore con null
        this.currentChat = this.contacts[0];
    },
    mounted() {
        for (let i = 0; i < this.contacts.length; i++) {
            let messaggi = this.contacts[i].messages;
            let ora = this.lastHour(messaggi);
            this.contacts[i].statoContatto = `Ultimo accesso oggi alle ${ora}`;
        }
    }
}).mount("#app");