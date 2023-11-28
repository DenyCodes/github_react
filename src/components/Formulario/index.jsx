import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o estado mudou");
    }, [nome]);

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    }, []);

    useEffect(() => {
        console.log("materia a mudou para : "+ materiaA)
    }, [materiaA]);

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            // console.log(estadoAnterior)
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        console.log(media);
        console.log(soma);

        if (media >= 7) {
            return (
                <p>
                    Olá {nome}, voce foi aprovado
                </p>
            )
        } else {
            return (
                <p>olá {nome}, voce não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            </ul>

        <input type="text" placeholder="seu nome" onChange={alteraNome} />
        <input type="number" placeholder="Nota Matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
        <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
        <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
        {renderizaResultado()}
        </form>
    )
}
export default Formulario