import User from '../models/User.model';

export default defineEventHandler(async (event) => {
  try {
    // Read incoming JSON body
    const body = await readBody(event)

    // Validate basic fields (optional but recommended)
    if (!body.firstname || !body.lastname) {
      throw createError({
        statusCode: 400,
        message: 'Firstname and lastname are required.'
      })
    }

    // Create user document
    const user = await User.create({
      firstname: body.firstname,
      lastname: body.lastname,
      grade: body.grade,
      section: body.section,
      game: body.game,
      score: body.score,
      date: body.date
    })

    return {
      success: true,
      user
    }
  } catch (err: any) {
    console.error('API Error:', err)

    throw createError({
      statusCode: 500,
      message: err.message || 'Server Error'
    })
  }
})
