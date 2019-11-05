<template>
    <span>
        <h4>{{QM_question.question}}</h4>
        <div v-for="QM_answser in QM_question.answers" :key="QM_question.id + QM_answser.id">
            <label :for="'checkbox' + QM_question.id + QM_answser.id">
                {{QM_answser.text}}
                <input type="radio" v-model="QM_QuestionAnswers" :value="QM_answser.id" :name="QM_question.id" :id="'checkbox' + QM_question.id + QM_answser.id" required>
            </label>
        </div>
        <br>
        <input type="button" v-if="!QM_isLast" v-on:click="$emit('next-question')" value="Question suivante" />
        <input v-else type="submit" v-on:click="checkResultForm" value="Valider ces réponses" />
    </span>
</template>
<script>
    export default {
        name: "QM_question",
        props : {
            QM_question: null,
            QM_response: null,
            QM_isLast: null,
        },
        data() {
            return {
                QM_QuestionAnswers : []
            }
        },
        methods : {
            checkResultForm : function(){

            }
        }

    }
</script>

<style scoped>
    span{
        display: inline-table;
        width: 100vw;
        height: 65vh;
        padding-top: 25vh;
        text-align: center;
    }
</style>