// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// @Entity()
// export class Article {
//   @PrimaryGeneratedColumn()
//   id: number;
//   @Column()
//   title: string;
//   @Column()
//   content: string;
// }
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export  class Article {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    age : number;

    @Column()
    email : string;
}