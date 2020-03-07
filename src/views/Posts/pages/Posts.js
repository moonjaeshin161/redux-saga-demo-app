import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getPosts } from '../Redux/action';
import CustomPagination from '../../../components/Pagination/CustomPagination';
import '../styles/posts.css'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            postsPerPage: 10

        };
    }
    componentDidMount() {
        this.props.onGetPosts();
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    render() {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.props.posts.slice(indexOfFirstPost, indexOfLastPost);
        const totalsPost = this.props.posts.length;
        return (
            <>
                <h1 className='text-title'>Post Pages</h1>

                <Table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentPosts.map((post, index) => (
                                <tr key={index}>
                                    <th scope='row'>{post.userId}</th>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <CustomPagination
                    className='pagination'
                    totalsPost={totalsPost}
                    postsPerPage={this.state.postsPerPage}
                    paginate={this.paginate} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.Posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    onGetPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);