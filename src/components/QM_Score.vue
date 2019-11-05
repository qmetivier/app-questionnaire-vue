<template>
    <div class="back">
        <h1>Bravo {{QM_user.QM_firstName}}, votre score est de : {{QM_score}} / {{QM_questions.length}}
            <br>
            <router-link to="/"><button>Retourner au login</button></router-link>
        </h1>
    </div>
</template>


<script>

    import QM_questions_file from '../assets/form1'

    export default {
        name: "QM_Score.vue",
        data() {
            return{
                QM_user: "",
                QM_questions: QM_questions_file,
                QM_score: 0
            }
        },
        methods: {

        },
        mounted(){
            let QM_responses = JSON.parse(localStorage.QM_responses);
            this.QM_user = JSON.parse(localStorage.QM_user);

            for (let QM_index in this.QM_questions){
                let QM_question_id = this.QM_questions[QM_index].id;
                if(QM_responses[QM_question_id] == this.QM_questions[QM_index].response){
                    this.QM_score++;
                }
            }
        }

    }

</script>

<style scoped>

    .back{
        width: 100vw;
        height: 97vh;
        background-image: url("../assets/congratulation.gif");
        background-repeat: no-repeat;
        background-size: cover;
        background-origin: border-box;
    }

    h1{
        color: white;
        padding-top: 50px ;
        text-align: center;
    }

</style>