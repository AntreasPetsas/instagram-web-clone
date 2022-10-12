##### Configuration ###########################################################

# ARG REACT_APP_DEFAULTAUTH
# ARG REACT_APP_API
# ARG REACT_APP_IDEALPOSTCODES_API_KEY
# ARG REACT_APP_WS
# ARG REACT_APP_MODE
# ARG REACT_APP_API_KEY
# ARG REACT_APP_AUTH_DOMAIN
# ARG REACT_APP_PROJECT_ID
# ARG REACT_APP_STORAGE_BUCKET
# ARG REACT_APP_MESSAGING_SENDER_ID
# ARG REACT_APP_APP_ID

###############################################################################

##### Environment #############################################################

FROM node:14-alpine AS patch-image

RUN apk update && apk upgrade

# --------------------------------------------------------------------

FROM patch-image AS base-image

LABEL maintainer="Andreas Petsas <antreasp07@gmail.com>"

# Environment variables
ENV REFRESHED_AT 2022-07-22
ENV DEV_DIR="/usr/src"
ENV APP_DIR="${DEV_DIR}/instagram-web-clone/frontend"
ENV USER="node"
ENV GROUP="node"

# Set working directory
RUN mkdir -p ${APP_DIR} && \
    chown -R ${USER}:${GROUP} ${APP_DIR}
WORKDIR ${APP_DIR}

# --------------------------------------------------------------------

FROM base-image AS compile-base

# ARG REACT_APP_DEFAULTAUTH
# ARG REACT_APP_API
# ARG REACT_APP_IDEALPOSTCODES_API_KEY
# ARG REACT_APP_WS
# ARG REACT_APP_MODE
# ARG REACT_APP_API_KEY
# ARG REACT_APP_AUTH_DOMAIN
# ARG REACT_APP_PROJECT_ID
# ARG REACT_APP_STORAGE_BUCKET
# ARG REACT_APP_MESSAGING_SENDER_ID
# ARG REACT_APP_APP_ID


# ENV REACT_APP_DEFAULTAUTH=${REACT_APP_DEFAULTAUTH} \
#     REACT_APP_API=${REACT_APP_API} \
#     REACT_APP_IDEALPOSTCODES_API_KEY=${REACT_APP_IDEALPOSTCODES_API_KEY} \
#     REACT_APP_WS=${REACT_APP_WS} \
#     REACT_APP_MODE=${REACT_APP_MODE} \
#     REACT_APP_API_KEY=${REACT_APP_API_KEY} \
#     REACT_APP_AUTH_DOMAIN=${REACT_APP_AUTH_DOMAIN} \
#     REACT_APP_PROJECT_ID=${REACT_APP_PROJECT_ID} \
#     REACT_APP_STORAGE_BUCKET=${REACT_APP_STORAGE_BUCKET} \
#     REACT_APP_MESSAGING_SENDER_ID=${REACT_APP_MESSAGING_SENDER_ID} \
#     REACT_APP_APP_ID=${REACT_APP_APP_ID}

# Install external dependencies
RUN apk add --update --no-cache \
        git

# Install node dependencies
# Ensure lock file does not contain:
# dependencies with url starting with "git://"
# If so replace it with "git+https://"
COPY package*.json ${APP_DIR}/
# --------------------------------------------------------------------

FROM compile-base AS compile-dev

# Install node dependencies including dev
RUN npm install --silent

# --------------------------------------------------------------------

FROM compile-base AS compile-prod

# Install node dependencies for production
RUN npm install

# Copy needed files
COPY . ${APP_DIR}/

# Build production
RUN npm run build

###############################################################################

##### Releases ################################################################

FROM base-image AS dev

# Copy needed files
COPY --chown=${USER}:${GROUP} . ${APP_DIR}/
# Copy node_modules
COPY --chown=${USER}:${GROUP} --from=compile-dev ${APP_DIR}/node_modules ${APP_DIR}/node_modules

# Switch Non-root user
USER ${USER}

# Run development mode
EXPOSE 3000
CMD [ "npm", "start" ]

# --------------------------------------------------------------------

FROM base-image AS prod

# Install globally accessible express server
RUN npm i -s express

# Copy server.js for running the admin server
COPY --chown=${USER}:${GROUP} server.js ${APP_DIR}/
# Copy built production files
COPY --chown=${USER}:${GROUP} --from=compile-prod ${APP_DIR}/build ${APP_DIR}/build

# Switch Non-root user
USER ${USER}

# Run development mode
EXPOSE 8080
CMD [ "node", "server.js" ]

###############################################################################
