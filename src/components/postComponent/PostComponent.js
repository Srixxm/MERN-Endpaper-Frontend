import React, { Component } from 'react'

class PostComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            title : "",
            outline : "",
            content : ""
        }
    }

    firstNameHandler = event => {
        this.setState(
            {
                firstName : event.target.value
            }
        )
    }

    lastNameHandler = event => {
        this.setState(
            {
                lastName : event.target.value
            }
        )
    }

    emailHandler = event => {
        this.setState(
            {
                email : event.target.value
            }
        )
    }

    titleHandler = event => {
        this.setState(
            {
                title : event.target.value
            }
        )
    }

    outlineHandler = event => {
        this.setState(
            {
                outline : event.target.value
            }
        )
    }

    contentHandler = event => {
        this.setState(
            {
                content : event.target.value
            }
        )
    }

    formSubmitHandler = event => {
        event.preventDefault()
        console.log(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password
        )

        fetch('http://localhost:3500/api/v1/postnews',{
            method : 'POST',
            crossDomain: true,
            headers: {
                'Content-type' :'application/json',
                'Access-Control-Allow-Origin' : '*' 
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                title: this.state.title,
                outline: this.state.outline,
                content: this.state.content
            })
        })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
    }

  render() {
    const {firstName, lastName, email, title, outline, content} = this.state
    return (
        <form onSubmit={this.formSubmitHandler}>
        <h3>Share your insteresting News</h3>

        <div className='mb-3'>
            <lable>First Name</lable>
            <input
            type='text'
            className='mb-3'
            placeholder='Enter your First Name'
            value={firstName}
            onChange={this.firstNameHandler}
            required
            />
        </div>

        <div className='mb-3'>
            <lable>Last Name</lable>
            <input
            type='text'
            className='form'
            placeholder='Enter your Last Name'
            value={lastName}
            onChange={this.lastNameHandler}
            required
            />
        </div>

        <div className='mb-3'>
            <lable>Email</lable>
            <input
            type='email'
            className='form'
            placeholder='Enter your email'
            value={email}
            onChange={this.emailHandler}
            required
            />
        </div>


        <div className='mb-3'>
            <lable>Title</lable>
            <input
            type='text'
            className='form'
            placeholder='Enter your Title'
            value={title}
            onChange={this.titleHandler}
            required
            />
        </div>

        <div className='mb-3'>
            <lable>outline</lable>
            <input
            type='text'
            className='form'
            placeholder='Enter your Last Name'
            value={outline}
            onChange={this.outlineHandler}
            required
            />
        </div>

        <div className='mb-3'>
            <lable>Content</lable>
            <input
            type='textarea'
            className='form'
            placeholder='Enter your content'
            value={content}
            onChange={this.contentHandler}
            required
            />
        </div>


        <div>
            <button type='submit' className='button'>Submit</button>
        </div>

       
    </form>
    )
  }
}

export default PostComponent