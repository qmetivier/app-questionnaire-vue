<template>
    <h4>Bravo {{QM_firstName}}, votre score est de : {{QM_score}}</h4>
</template>


<script>

    import QM_questions_file from '../assets/form1'

    export default {
        name: "QM_Score.vue",
        data() {
            return{
                QM_firstName: "",
                QM_questions: QM_questions_file,
                QM_score: 0
            }
        },
        methods: {
        },
        mounted(){

            this.QM_firstName = localStorage.QM_firstName;

            for (let QM_index in this.QM_questions){
                let QM_question_id = this.QM_questions[QM_index].id;
                if(this.$route.query[QM_question_id] == this.QM_questions[QM_index].response){
                    this.QM_score++;
                }
            }
        }

    }

</script>

<style scoped>

</style>