import React from 'react';
import { Pagination, PaginationItem, PaginationLink, Media, Card} from 'reactstrap';
import PropTypes from 'prop-types';

let userList
class Users extends React.Component {

    state ={
        usersDetails :[],
        queryPageNo:1,
        paginationDetals:[]

    }


    paginationClick=(i)=> {
        this.setState({ queryPageNo: i },  
            () => this.props.getUsers(this.state.queryPageNo)
        );
    }

/*state = { cachedSomeProp: null };

static getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.users !== prevState.cachedSomeProp){
    return {
        cachedSomeProp: nextProps.users,
      };
      console.log("this.state.cachedSomeProp",this.state.cachedSomeProp)
    }
    return null;
  
}*/
   
    componentDidMount() {
        console.log("componentDidMount props", this.props)
        this.props.getUsers(this.state.queryPageNo)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate this.prevProps", prevProps);
        console.log("componentDidUpdate this.prevState", prevState);
        console.log("componentDidUpdate this.snapshot", snapshot);
        console.log("componentDidUpdate this.props", this.props);
        console.log("this.props.users.data.total_pages", this.props.users.data.total_pages);
        if(prevProps !== this.props){
          const userEach = this.props.users.data.data.map((user) => 
          <Card key={user.id} className="mb-5">
            <Media>
                <Media left href="#">
                    <Media object src={user.avatar} alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                    {user.first_name} {' '} {user.last_name}
                    </Media>
                </Media>
            </Media>
          </Card>
        )

        this.setState({
            usersDetails : userEach
        })

        let paginationContent=[];
        
            for (let i = 0; i < this.props.users.data.total_pages; i++) {
                
                    paginationContent.push(
                        <PaginationItem key={i.toString()}>
                            <PaginationLink href="#" onClick={(e) => this.paginationClick(i+1)}>
                                {i+1}
                            </PaginationLink>
                        </PaginationItem>
                    )
                    
                
                
            }
            console.log("paginationContent", paginationContent);
            this.setState({
                paginationDetals: paginationContent
            })

        }
        
    }

    render() {
        return (
                <div>
                
                {this.state.usersDetails}
                <Pagination aria-label="Page navigation">
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    {this.state.paginationDetals}
                    <PaginationItem>
                    <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>   
            </div>
        );
    }
    
}
Pagination.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    listClassName: PropTypes.string,
    cssModule: PropTypes.object,
    size: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
  };
  
  PaginationItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };
  
  PaginationLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    next: PropTypes.bool,
    previous: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    'aria-label': PropTypes.string
  };
export default Users;









