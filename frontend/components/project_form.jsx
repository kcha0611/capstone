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
      <div>
        <form>
          <h1>Create A Project!</h1>
          <input type="text" value={this.state.title} onChange={this.tChange}>Title:</input>
            <br></br>
            <br></br>
          <input type="text" value={this.state.description} onChange={this.bChange}>Description:</input>
            <br></br>
            <br></br>
        </form>
      </div>
    )
  }
}
