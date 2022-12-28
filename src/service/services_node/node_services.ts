import axios from 'axios'
import { makeAutoObservable } from "mobx"
import { injectable } from 'inversify'
import { Node } from '../../interfaces/TendonType'

@injectable()
class NodeService {
    response: Node
    status: number

    constructor() {
        makeAutoObservable(this)
        this.response = {} as Node
        this.status = 0
    }

    async postNode(body: Node, token: string) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axios.post('http://24.199.72.217:8080/api/v1/auth/nodes', {
                type: body.type,
                data: body.data
            }, config)

        .then((response) => {
            this.status = response.status
            this.response = response.data
        })
        .catch((err) => {
            this.status = Object(err)["response"]["request"]["status"]
            this.response = {} as Node
        });

        return this.response
    }

    public getStatus() {
        return this.status
    }

    public getResponse() {
        return this.response
    }

}

export default NodeService