class Api::CommentsController < ApplicationController
  def index
    comments = Comment.all
  end

  def show
  end

  def create
    comment = Comment.create(comment_params)
    render :show
  end

  def destroy
    comment = Comment.find_by(params[id])
    comment.destroy!
  end

  private

  def comment_params
    params.require(:comment).permit(:title, :body, :author_id)
  end
end
