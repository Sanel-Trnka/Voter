const app = Vue.createApp({
    // Optionen
    data: function () {
        return {
            submissions: submissions, //totalVotes: 0,
        };
    }, computed: {
        totalVotes() {
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes;
            }, 0)
        }, sortedSubmissions() {
            return this.submissions.sort((a, b) => {
                return b.votes - a.votes;
            })
        }
    }, watch: {
        /*submissions(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        },*/
        /*submissions: {
            handler(newValue, oldValue) {
                this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
                    return totalVotes + submission.votes;
                }, 0);
            },
            deep: true,
            immediate: true,
        },
        totalVotes(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
        }*/
    }, methods: {
        /*upvote(index) {
            this.submissions.find((submission) => submission.id === index).votes++;
        },
        setBackground(index) {
            return (index % 2 === 0) ? 'bg-white' : 'bg-secondary';
        }
        totalVotes() {
            return this.submissions.reduce((totalVotes, submission) => {
                return totalVotes + submission.votes;
            }, 0)
        },*/
    },
});

app.component("SubmissionListItem", {
    props: ["submission"],
    methods: {
        upvote() {
            this.submission.votes++;
        },
    },
    template: `
    <div class="d-flex">
        <div class="flex-shrink-0">
            <img :src="submission.img" alt="">
        </div>
        <div class="flex-grow-1 ms-3">
            <h5>{{ submission.title }}
                <span @click="upvote()" class="float-end text-primary" style="cursor: pointer;">
                    <i class="fa fa-chevron-up"></i>
                    <strong>{{ submission.votes }}</strong>
                </span>
            </h5>
            <div>{{ submission.desc }}</div>
            <small class="text-muted">Eingereicht von: {{ submission.author }}</small>
        </div>
    </div>
    `,
});

const vm = app.mount('#app');