#!/bin/bash

# RECEBE O schema.prisma gerado na raiz da pasta da api
PRISMA_FILE=./prisma/schema.prisma
# RECEBE O schema.prisma onde contem os models de fato
DATABASE_SUBMODULED=data/prisma/schema.prisma
# RECEBE O base.prisma criado na pasta prisma gerada na raiz da api, esse arquivo contem as informações para gerar a pasta @generated com as tipagens
PRISMA_BASE_SCHEMA=./prisma/base.prisma

#Usa o comando cat para imprimir o conteúdo de base.prisma e redireciona (>) este conteúdo para schema.prisma, sobrescrevendo qualquer conteúdo existente em schema.prisma.
cat $PRISMA_BASE_SCHEMA > $PRISMA_FILE &&
cat $DATABASE_SUBMODULED | sed -n '/^datasource db {$/,$p' >> $PRISMA_FILE &&
npx prisma format &&
npm run prisma:generate:client
