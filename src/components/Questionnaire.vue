<template>
    <div class="questionnaire_div">
        <div class="progress_bar">
            <span v-for=" QM_question in QM_questions" :key="QM_question.id">
                {{(QM_question.id === QM_selectedItemProgressBar) ? "0" : "o"}}
            </span>
        </div>
        <div class="container_question_list">
            <form @submit="QM_checkForm" method="get" class="question_list" id="question_list" style="left: 0;">
                <QM_question
                             v-for="QM_question in QM_questions"
                             :key="QM_question.id"
                             v-bind:QM_question="QM_question"
                             v-bind:q-m_is-last="(QM_question.id === (QM_questions.length-1))"
                             v-on:next-question="QM_nextQuestion"
                ></QM_question>
            </form>
        </div>
        <button class="previous_button" v-on:click="QM_previousQuestion">&larr;</button>
    </div>
</template>

<script>

    import QM_question from "@/components/QM_question";

    import QM_questions from '../assets/form1'

    export default {
        name: 'QM_Login',
        components: {QM_question},
        component : {
            QM_question,
        },
        data() {
            return{
                QM_firstName: "",
                QM_questions: QM_questions,
                QM_selectedItemProgressBar: 0,
            }
        },
        methods : {

            QM_previousQuestion : function(){
                let QM_listQuestion = document.getElementById("question_list");

                if((parseInt(QM_listQuestion.style.getPropertyValue("left").substr(0, QM_listQuestion.style.getPropertyValue("left").length - 2))) < 0 ){
                    QM_listQuestion.style.setProperty("left", (parseInt(QM_listQuestion.style.getPropertyValue("left").substr(0, QM_listQuestion.style.getPropertyValue("left").length - 2)) + 100) + "vw");
                    this.QM_selectedProgressBar(-1);
                }
            },

            QM_nextQuestion : function(){
                let QM_listQuestion = document.getElementById("question_list");

                if((parseInt(QM_listQuestion.style.getPropertyValue("left").substr(0, QM_listQuestion.style.getPropertyValue("left").length - 2))) >= this.QM_questions.length * -100 + 200){
                    QM_listQuestion.style.setProperty("left", (parseInt(QM_listQuestion.style.getPropertyValue("left").substr(0, QM_listQuestion.style.getPropertyValue("left").length - 2)) - 100) + "vw");
                    this.QM_selectedProgressBar(1);
                }
            },

            QM_selectedProgressBar: function(action){
                this.QM_selectedItemProgressBar += action;
            },

            /**
             * @return {boolean}
             */
            QM_checkForm : function (e){
                e.preventDefault();
                let inputs = e.target.getElementsByTagName('input');
                let responses = [];
                for(let i in inputs){
                    if ((inputs[i]).checked === true){
                        responses.push(inputs[i]);
                    }
                }
                let query = [];
                for (let i in responses){
                    query.push( (i+1), responses[i].value);
                }

                localStorage.QM_responses = JSON.stringify(query);

                this.$router.push('result');
            }

        },
        mounted() {
            if (localStorage.firstName) {
                this.QM_firstName = localStorage.firstName;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .questionnaire_div{
        height: 100vh;
        text-align: center;
        overflow-x: hidden;
    }

    .previous_button{
        position: fixed;
        top: 40vh;
        left: 0;
    }

    .progress_bar{
        background-color: ghostwhite;
        padding: 3vh;
    }

    .container_question_list{
        position: relative;
    }

    .question_list{
        position: absolute;
        top: 0;
        transition: linear .5s;
        overflow-x: scroll;
        text-overflow: ellipsis;
        white-space: nowrap;

    }

</style>
