class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    page_num = params[:pageNum].to_i
    page_size = params[:pageSize].to_i
    count = Post.count
    @posts = Post.joins(:user, :category)
                 .select("posts.*, users.name as author, categories.name as category_name")
                 .offset((page_num - 1) * page_size).take(page_size)

    result = { code: 200, data: { data: @posts, count: count }, message: 'success' }
    render json: result
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    user = User.find(post_params[:user_id])
    category = Category.find(post_params[:category_id])
    if user && category
      @post = user.posts.new(post_params)
      if @post.save
        render json: { code: 200, data: @post, message: "success" }, status: :created, location: @post
      else
        render json: { code: 200, message: @post.errors }, status: :unprocessable_entity
      end
    else
      render json: { code: 200, message: "can't find user or category" }
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(:title, :content, :user_id, :category_id)
  end
end
