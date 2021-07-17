import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import leading from './leading.module.css'

export default function Leading(){
    return(
        <div className={leading.body}>
            <header className={leading.container}>
                <nav className={leading.navigation}>
                    <h2>Kandenge-Kode</h2>
                    <h2>Kandenge-Kode</h2>
                    <ul>
                        <li><Link href='Cursos'></Link></li>
                        <li><Link href='Apoiar'></Link></li>
                        <li><Link href='Sugerir'></Link></li>
                        <li><Link href='Doar'></Link></li>
                    </ul>
                    {/* An icon here from github link */}
                </nav>
                <div className={leading.wrap}>
                    <div className={leading.account}>
                        <h1>{`Vamos ao espaço com linhas escritas á mão.`}</h1>
                        <p>{`Com programação vamos ao espaço, mas nós vamos além disso.`}</p>
                        <button>
                            <Link href='/createa'>Criar conta</Link>
                        </button>
                    </div>
                    <div className={leading.image}>
                        <Image 
                            alt='Kode ndenge'
                            width={40} 
                            height={40} 
                            href='' 
                        />
                    </div>
                </div>
            </header>

            <section className={leading.musthave}>
                <h2>{`Compromisso com todos os níveis de Ngola.`}</h2>
                <p>{`Ensinamentos nas mais diversas áreas, as bases, aqui são prioridades.`}</p>
                <h2><span>{`Obrigatorio`}</span></h2>
                <div className={leading.courses}>
                    <Image alt='Kode ndenge' width={40} height={40} href='' />
                    <h2>course 1</h2>
                    <p>some description of this</p>
                </div>
                <div className={leading.courses}>
                    <Image alt='Kode ndenge' width={40} height={40} href='' />
                    <h2>course 2</h2>
                    <p>some description of this</p>
                </div>
                <div className={leading.courses}>
                    <Image alt='Kode ndenge' width={40} height={40} href='' />
                    <h2>course 3</h2>
                    <p>some description of this</p>
                </div>
                <div className={leading.courses}>
                    <Image alt='Kode ndenge' width={40} height={40} href='' />
                    <h2>course 4</h2>
                    <p>some description of this</p>
                </div>
            </section>

            <section className={leading.partners}>
                <h2>Parceiros</h2>
                <p>Algumas pessoas que confiam no noso trabalho</p>
                {/*Som eimages here of th partners*/}
            </section>

            <section className={leading.payment}>
                <h2>{`O ensino sempre será gratuíto`}</h2>
                <p>
                    {`
                        Este é um projecto sem fim lucrativo, mas para mante-lo activo
                        precisa-se de dinheiro, portanto você pode doar o que tiver 
                        na secção apoirar e dentre eles com seu cartão, de eleição`
                    }
                </p>
                <Image alt='payment' width={40} height={40} href='' />
            </section>

            <section className={leading.events}>
                <h2>Eventos</h2>
                <div className={leading.eventdetail}>
                    <div className={leading.texts}>
                        <h2>Mona ya kode</h2>
                        <p>{`Um evento anual, para mostrares
                            as tuas habilidades de programação
                            e ganhares, um trofeu.`}
                        </p>
                        <p>{`10 á 15 ago`}</p>
                    </div>
                    <Image alt='Event mona ya kode' width={40} height={40} href='' />
                </div>
            </section>

            <section className={leading.media}>
                <div className={leading.youtube}>
                    <Image alt='Event mona ya kode' width={40} height={40} href='' />
                    <h2>Youtube</h2>
                    <p>{`Nós temos um canal 
                        no youtube onde você
                        pode acompanhar as 
                        aulas.`}
                    </p>
                </div>
                <div className={leading.others}>
                    <Image alt='Instagram' width={40} height={40} href='' />
                    <Image alt='Discord' width={40} height={40} href='' />
                    <Image alt='Github' width={40} height={40} href='' />
                </div>
                <p>{`@2021 bantu_dev`}</p>
            </section>
        </div>
    )
}