function getInactiveShoppingListsForUser(userId) {
    const histories = model.data.shoppingListHistories;
    const shoppingLists = model.data.shoppingLists;

    return histories
        .filter(h => !h.isActive)
        .map(h => {
            const list = shoppingLists.find(
                l => l.id === h.shoppingListId && l.ownerUserId === userId
            );
            if (!list) return null;
            return {
                id: list.id,
                name: list.name,
                completedDate: h.completedDate
            };
        })
        .filter(l => l !== null);
}
