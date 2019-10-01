#!/bin/bash
USER=$1
TOKEN=$2
ORGANIZATION=accordproject

# Get all public AP repos
REPOS=( $(curl -u ${USER}:${TOKEN} -s https://api.github.com/orgs/${ORGANIZATION}/repos | jq -r '.[] | select (.fork == false) | .name') )

# Get contributors for each repo
CONTRIBUTORS=()
for repo in "${REPOS[@]}"; do
    echo "${repo}"
    REPO_CONTRIBUTORS=( $(curl -u ${USER}:${TOKEN} -s https://api.github.com/repos/${ORGANIZATION}/${repo}/stats/contributors | jq -r '.[] | .author.id') )

    # Concatenate the existing contributors with the new ones
    CONTRIBUTORS=("${CONTRIBUTORS[@]}" "${REPO_CONTRIBUTORS[@]}")
done

# Remove duplicates
CONTRIBUTORS=($( echo "${CONTRIBUTORS[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))

for i in "${!CONTRIBUTORS[@]}"; do 
    if [ $(($i % 20)) -eq 0 ]; then
        echo ""
    fi
    echo "<img src=\"https://avatars3.githubusercontent.com/u/${CONTRIBUTORS[$i]}?s=30&v=4\" height="30"/> "; 

done > CONTRIBUTORS.md
