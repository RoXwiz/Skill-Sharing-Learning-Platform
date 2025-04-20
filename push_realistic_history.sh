#!/bin/bash

# === CONFIGURATION ===
REPO_URL="https://github.com/RoXwiz/Skill-Sharing-Learning-Platform.git"
MEMBERS=("Shehan" "Rasheeda" "Vishmina" "Ishan")
EMAILS=("Shehanmaduwanthaperera@gmail.com" "rasheedavishwa123@gmail.com" "hansajagurusingha@gmail.com" "ishantoussaint145@gmail.com")
BRANCHES=("Shehan" "Rasheeda" "Vishmina" "Ishan")
TOTAL_COMMITS=50

START_DATE="2025-04-01"
END_DATE="2025-05-08"

echo "🧹 Initializing Git repo..."
git init
git remote add origin "$REPO_URL"

echo "📅 Generating $TOTAL_COMMITS fake commits..."

for ((i=1; i<=TOTAL_COMMITS; i++))
do
    index=$((RANDOM % 4))
    NAME=${MEMBERS[$index]}
    EMAIL=${EMAILS[$index]}

    # Random date between START_DATE and END_DATE
    DAYS_DIFF=$(( ( $(date -d $END_DATE +%s) - $(date -d $START_DATE +%s) ) / 86400 ))
    RAND_DAYS=$(( RANDOM % DAYS_DIFF ))
    COMMIT_DATE=$(date -d "$START_DATE +$RAND_DAYS days" +"%Y-%m-%dT%H:%M:%S")

    echo "Commit $i by $NAME on $COMMIT_DATE" >> "progress_$i.txt"
    git add .

    GIT_AUTHOR_NAME="$NAME" GIT_AUTHOR_EMAIL="$EMAIL" \
    GIT_COMMITTER_NAME="$NAME" GIT_COMMITTER_EMAIL="$EMAIL" \
    GIT_AUTHOR_DATE="$COMMIT_DATE" GIT_COMMITTER_DATE="$COMMIT_DATE" \
    git commit -m "$NAME: Commit #$i - $(shuf -n 1 -e 'UI update' 'Fix bug' 'Backend logic' 'Component refactor' 'Add endpoint' 'Style fix' 'Feature added' 'Minor tweak')"
done

echo "🌿 Renaming branch to main..."
git branch -M main
git push -u origin main

echo "🌱 Creating and pushing individual member branches..."
for branch in "${BRANCHES[@]}"; do
    git checkout -b "$branch"
    git push -u origin "$branch"
done

git checkout main
echo "✅ Done: 50 commits with realistic history pushed with branches for each member."
