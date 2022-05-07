/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { setOriginalNode } from 'typescript';
const BetOffering = require('../models/betOffering');

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    let id: string = req.params.id;
    // get the data from req.body
    let title: string = req.body.title ?? null;
    let body: string = req.body.body ?? null;
    // update the post
    let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        ...(title && { title }),
        ...(body && { body })
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    let id: string = req.params.id;
    // delete the post
    let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let title: string = req.body.title;
    let body: string = req.body.body;
    // add the post
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

const getTestPoint = async (req: Request, res: Response, next: NextFunction) => {

    return res.status(200).json({
        message: "getTestPointMessage"
    });
};

const postBetOffering = async (req: Request, res: Response, next: NextFunction) => {
    const { type, odds, subject, objective, valid } = req.body;

    console.log(req.body);
    console.log(type);

    // const post = BetOffering.build({
    //     "type": req.body.type,
    //     "odds": req.body.odds,
    //     "subject":req.body.subject,
    //     "objective":req.body.objective,
    //     "valid":req.body.valid
    // })
    const offering = new BetOffering({
        "type": type,
        "odds": odds,
        "subject": subject,
        "objective": objective,
        "valid": valid
    })
    await offering.save();

    // return res.status(200).send(betOffering);
    return res.status(200).json({
        message: "post bet offering"
    });
}

const homePage = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200)
}

const getBetOfferings =async (req: Request, res: Response, next: NextFunction) => {
    const offerings = await BetOffering.find();
    return res.status(200).json({
        message: offerings
    });
}
export default { 
                 getPosts, 
                 getPost, 
                 updatePost, 
                 deletePost, 
                 addPost, 
                 getTestPoint, 
                 postBetOffering,
                homePage,
                getBetOfferings,
                 };