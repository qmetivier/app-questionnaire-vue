<template>
    <div class="questionnaire_div">
        <div class="progress_bar">
            <span v-for=" QM_question in QM_questions">
                {{(QM_question.id === QM_selectedItemProgressBar) ? "0" : "o"}}
            </span>
        </div>
        <div class="container_question_list">
            <div class="question_list" id="question_list" style="left: 0;">
                <QM_question
                             v-for="QM_question in QM_questions"
                             v-bind:QM_question="QM_question"
                             :key="QM_question.id"
                             v-bind:q-m_is-last="(QM_question.id === (QM_questions.length-1))"
                             v-on:next-question="QM_nextQuestion"
                ></QM_question>
            </div>
        </div>
        <button class="previous_button" v-on:click="QM_previousQuestion">&larr;</button>
    </div>
</template>

<script>

    import QM_question from "@/components/QM_question";

    export default {
        name: 'QM_Login',
        components: {QM_question},
        component : {
            QM_question,
        },
        data() {
            return{
                QM_questions: [
                    {
                        id: 0,
                        question : "question_1",
                        awnsers :[
                            { text: "awnser_1" },
                            { text: "awnser_2" },
                            { text: "awnser_3" },
                        ]
                    },
                    {
                        id: 1,
                        question : "question_2",
                        awnsers :[
                            { text: "awnser_1" },
                            { text: "awnser_2" },
                            { text: "awnser_3" },
                        ]
                    },
                    {
                        id: 2,
                        question : "question_3",
                        awnsers :[
                            { text: "awnser_1" },
                            { text: "awnser_2" },
                            { text: "awnser_3" },
                        ]
                    }
                ],
                QM_selectedItemProgressBar: 0
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
