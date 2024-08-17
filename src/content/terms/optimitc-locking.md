---
title: "Optimistic Locking"
subtext: "Managing concurrent updates"
description: "Optimistic locking is a strategy where you read a record and there is some versioning in it (can be timestamp, version number, etc.), and then when you attempt to update the record, the versioning is checked. The update is only committed when the record version remains the same. If the record version has changed, then the update attempt is aborted. This is particularly useful to increase throughput, and prevent conflicts when multiple users attempt to update a single record."
imageUrl: "https://stackoverflow.com/content/optimized-locking.jpg"
resourceUrl: "https://stackoverflow.com/questions/129329/optimistic-vs-pessimistic-locking"
---
