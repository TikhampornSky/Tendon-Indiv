// import {useEffect, useState} from "react";
import { makeAutoObservable } from "mobx"

import { Container } from "inversify";
import TYPES, { Node } from '../interfaces/TendonType'
import NodeService from "../service/services_node/node_services";

class NodeShowDataViewModel{
    private NodeService: NodeService 
    private node: Node
    private status: Number
    private message: string

    constructor(container: Container) {
        makeAutoObservable(this)
        this.NodeService = container.get<NodeService>(TYPES.NodeService)
        this.node = {} as Node
        this.status = 0
        this.message = ''
    }
    
    async createNode(body: Node, token: string) {
        const tmpValue =  await this.NodeService.postNode(body, token)
        this.status = this.NodeService.getStatus()
        if (this.status === 201) {
            this.node = tmpValue
            return this.node
        } else {
            this.handleErrorStatus()
        }
        return {} as Node
    }

    

    public getNode() {
        return this.node
    }

    public getStatus() {
        return this.status
    }

    public getMessage() {
        return this.message
    }

    private handleErrorStatus() {
        if (this.status === 400) {
            this.message = "some field not exit"
        } else if (this.status === 401) {
            this.message = "Unauthorized"
        } else if (this.status === 404) {
            this.message = "Doesn't have this ID"
        } else if (this.status === 406) {
            this.message = "wrong email or password"
        } else if (this.status === 409) {
            this.message = "email already exists"
        } else {
            this.message = "Internal Error"
        }
    }

}

export default NodeShowDataViewModel