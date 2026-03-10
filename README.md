# TypeScript First Time

A simple introductory project to TypeScript designed to demonstrate the fundamental concepts of Object-Oriented Programming (OOP), specifically class creation and object instantiation.

## 📋 About the Project

This repository contains a practical example of how to define a class in TypeScript with typed properties, a constructor, and an instance method.

## 🚀 Features

* **Class Definition**: Implementation of the `Pessoa` (Person) class.
* **Strong Typing**: Use of `string` and `Number` types to ensure data integrity.
* **String Interpolation**: A method to return a formatted introduction of the user.

## 💻 Code Example

The main file `index.ts` contains the following structure:

```typescript
class Pessoa {
    nome: string;
    idade: Number;

    constructor(nome: string, idade: Number) {
        this.nome = nome;
        this.idade = idade;
    }
    
    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Creating an instance of the Pessoa class
const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.apresentar());
