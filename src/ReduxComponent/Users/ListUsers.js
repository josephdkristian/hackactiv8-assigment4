import { Layout, Breadcrumb, Button, Col, Input, Row } from 'antd'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDebounce } from 'use-lodash-debounce'
import { incrementProcessing, decrementProcessing } from '../../Services/Users/users.reducer';
import Bills from "../Bills/ListBills";
import {
    UserActions
} from "../../Services/Users/users.reducer"

const { Header, Content, Footer } = Layout;

const Users = ({ users, dispatch }) => {

    const [queryUser, setQueryUser] = useState("");
    const debounceSetValue = useDebounce(queryUser, 1000);
    const [loadingAction, setLoadingAction] = useState(true);
    
    useEffect(() => {
        dispatch(UserActions.getUsers());
    }, []);

    useEffect(() => {
        //BuildRow();
        dispatch(UserActions.getUsers(debounceSetValue ? `?name=${queryUser}` : ""));

    }, [debounceSetValue]);

    // useEffect(() => {
    //     //BuildRow();
    //     if(queryUser){
    //         dispatch(UserActions.getUsers(`?name=${queryUser}`));
    //     }
    // }, [queryUser]);

    const onchangeInput = (e) => {
        let val = e.target.value;
        val = val.split(' ').join('+')
        setQueryUser(val);
    }

    const BuildRow = () => {
        if(users.dataTable.length != 0) setLoadingAction(false);
        return (
            <>
                <Row gutter={[15, 16]}>
                    {
                        loadingAction 
                        ?
                        <h4>Loading</h4> 
                        :
                            users.dataTable.length != 0
                            ?
                            users.dataTable.map((v) => {
                                return (
                                    <Col span={6}>
                                        <img width={200} src={v.avatar}></img>
                                        <h4>{v.name}</h4>
                                    </Col>
                                );
                            })
                            :
                            <h4>No Data</h4>
                    }
                </Row>
            </>
        );
    }

    const BuildUser = (v) => {
        return (
            <>
                <Col span={6}>
                    <img width={200} src={v.avatar}></img>
                    <h4>{v.name}</h4>
                </Col>
            </>
        );
    }

    return (
        <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <div className="logo" />
            </Header>
            <Content
                className="site-layout"
                style={{ padding: "0 50px", marginTop: 64 }}
            >
                <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                <div style={{ padding: 24, minHeight: 380 }}>
                    <Row>
                        <Col span={24}>
                            <Input
                                placeholder="Search User"
                                enterButton="Search"
                                allowClear
                                onChange={onchangeInput}
                            />
                            <BuildRow />
                            {/* <Row gutter={[15, 16]}>
                                {users.dataTable.map((v) => {
                                    return (
                                        <Col span={6}>
                                            <img width={200} src={v.avatar}></img>
                                            <h4>{v.name}</h4>
                                        </Col>
                                    );
                                })}
                            </Row> */}
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         sta
//     }
// }

export default connect(
    (state) => ({ users: state.users }) //mapStateToProps
)(Users);