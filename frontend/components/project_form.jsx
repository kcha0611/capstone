module.exports = {
    getInitialState: function() {
      return {
        title: "",
        description: ""
      };
    },
    tChange (e) {
      this.setState({title: e.target.value})
    },
    dChange(e) {
      this.setState({body: e.target.value})
    },
    render () {
    return (
      <div className="div-proj-form">
        <form onSubmit={this.submit}>
          <h1>Create A Project!</h1>
          <input type="text" value={this.state.title} onChange={this.tChange}></input>
          <input type="textarea" value={this.state.description} onChange={this.dChange}></input>
        </form>
      </div>
    )
  }
}
