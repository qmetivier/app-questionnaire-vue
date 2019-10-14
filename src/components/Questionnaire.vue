<template>
    <div class="questionnaire_div">
        <div class="progress_bar">
            <span v-for=" question in QM_questions"> 0 </span>
        </div>
        <div class="container_question_list">
            <div class="question_list" id="question_list" style="top: 0; left: 0;" >
                <QM_question v-for="question in QM_questions" v-bind:QM_question="question" v-on:next-question="QM_nextQuestion"></QM_question>
            </div>
        </div>
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
                        question : "question_1",
                        awnsers :[
                            { text: "awnser_1" },
                            { text: "awnser_2" },
                            { text: "awnser_3" },
                        ]
                    },
                    {
                        question : "question_2",
                        awnsers :[
                            { text: "awnser_1" },
                            { text: "awnser_2" },
                            { text: "awnser_3" },
                        ]
                    }
                ]
            }
        },
        methods : {

            QM_nextQuestion : function(){
                let QM_listQuestion = document.getElementById("question_list");
                QM_listQuestion.style.setProperty("left", "-" + (QM_listQuestion.style.getPropertyValue("left").substr(0, QM_listQuestion.style.getPropertyValue("left").length - 2) + 100) + "vh");
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

    .progress_bar{
        background-color: ghostwhite;
        padding: 3vh;
    }

    .container_question_list{
        position: relative;
    }

    .question_list{
        position: absolute;
        overflow-x: scroll;
        text-overflow: ellipsis;
        white-space: nowrap;

    }

</style>
