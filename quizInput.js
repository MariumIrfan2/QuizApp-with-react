function QuizInput() {
    return (
        <>
            <h1 className="text-white text-center">ADD QUIZ</h1>
            <div className="container">
                <div className="p-2 ">
                    <textarea
                        name=""
                        placeholder="Enter Question"
                        className="p-2 w-100 fs-5 bg-light boder-0 shadow"
                        id="question"
                        cols={30}
                        rows={5}
                        defaultValue={""}
                    />
                </div>
                <div className="p-2">
                    <div>
                        <input
                            id="option"
                            className="p-2 w-100"
                            type="text"
                            placeholder="Enter Options"
                        />
                        <button onClick="addOption()" className="btn btn-light m-3">
                            Add option
                        </button>
                    </div>
                    <div>
                        <ol></ol>
                    </div>
                    <div>
                        <p className="bg-success p-2 text-white" id="correctAns">
                            Click on Correct Answer
                        </p>
                    </div>
                    <div>
                        <button onClick='submitQues()' className="btn btn-light">
                            Submit Question
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default QuizInput;